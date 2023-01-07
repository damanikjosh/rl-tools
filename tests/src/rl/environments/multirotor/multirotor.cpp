
using DTYPE = double;
using COUNTER_TYPE = int;
namespace dynamics_legacy{
    #include "multirotor_dynamics_generic.h"
    #include "parameters.h"
}

constexpr auto STATE_DIM = dynamics_legacy::STATE_DIM;
constexpr auto ACTION_DIM = dynamics_legacy::ACTION_DIM;

#include <layer_in_c/utils/generic/math.h>

#include <layer_in_c/rl/environments/multirotor/multirotor.h>
#include <layer_in_c/rl/environments/multirotor/default_parameters.h>

#include <layer_in_c/rl/environments/multirotor/operations_cpu.h>

namespace lic = layer_in_c;

#include <gtest/gtest.h>
#include <random>
#include <stdint.h>
TEST(LAYER_IN_C_RL_ENVIRONMENTS_MULTIROTOR, MULTIROTOR) {
    using SPEC = lic::rl::environments::multirotor::Specification<DTYPE, lic::rl::environments::multirotor::StaticParameters>;
    using ENVIRONMENT = lic::rl::environments::Multirotor<lic::devices::CPU, SPEC>;
    using PARAMETERS = lic::rl::environments::multirotor::Parameters<DTYPE, 4>;

    std::cout << "sizeof state: " << sizeof(lic::rl::environments::multirotor::State<DTYPE>) << std::endl;

    PARAMETERS parameters = lic::rl::environments::multirotor::default_parameters<DTYPE, 4>;
    ENVIRONMENT env({parameters});
    std::mt19937 rng(0);

    for(COUNTER_TYPE step_i = 0; step_i < 100; step_i++){
        std::normal_distribution<DTYPE> action_distribution;
        DTYPE state[STATE_DIM];
//        for(int i = 0; i < STATE_DIM; i++){
//            state[i] = 0;
//        }
//        state[3] = 1;
        ENVIRONMENT::State env_state;
        lic::sample_initial_state(env, env_state, rng);
        for(int i = 0; i < STATE_DIM; i++){
            state[i] = env_state.state[i];
        }

        memcpy(env_state.state, state, sizeof(DTYPE) * STATE_DIM);

        for(COUNTER_TYPE substep_i = 0; substep_i < 100; substep_i++){
            DTYPE action[ACTION_DIM];
            DTYPE env_action[ACTION_DIM];
            DTYPE dsdt[STATE_DIM];
            DTYPE next_state[STATE_DIM];
            ENVIRONMENT::State env_next_state;
            constexpr DTYPE action_min = 0;
            constexpr DTYPE action_max = 2000;
            for(COUNTER_TYPE action_i = 0; action_i < ACTION_DIM; action_i++){
                action[action_i] = 1000 + lic::utils::math::clamp<DTYPE>(action_distribution(rng) * 500, action_min, action_max);
            }
            for(COUNTER_TYPE action_i = 0; action_i < ACTION_DIM; action_i++){
                env_action[action_i] = (action[action_i] - action_min) / (action_max - action_min) * 2 - 1;
            }

            // Legacy
            dynamics_legacy::multirotor_dynamics(dynamics_legacy::params, state, action, dsdt);
            dynamics_legacy::next_state_rk4(dynamics_legacy::params, state, action, dynamics_legacy::params.dt, next_state);



            // Env based
            lic::step(env, env_state, env_action, env_next_state);

            DTYPE acc = 0;
            for(COUNTER_TYPE state_i = 0; state_i < STATE_DIM; state_i++){
                acc += std::abs(env_next_state.state[state_i] - next_state[state_i]);
                EXPECT_NEAR(env_next_state.state[state_i], next_state[state_i], 1e-6);
            }
            std::cout << "Next state deviation: " << acc << std::endl;

            for(COUNTER_TYPE state_i = 0; state_i < STATE_DIM; state_i++){
                state[state_i] = next_state[state_i];
            }
            env_state = env_next_state;
        }

    }

}
