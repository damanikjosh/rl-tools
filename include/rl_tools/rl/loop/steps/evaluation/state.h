#include "../../../../version.h"
#if (defined(RL_TOOLS_DISABLE_INCLUDE_GUARDS) || !defined(RL_TOOLS_RL_LOOP_STEPS_EVALUATION_STATE_H)) && (RL_TOOLS_USE_THIS_VERSION == 1)
#pragma once
#define RL_TOOLS_RL_LOOP_STEPS_EVALUATION_STATE_H

#include "../../../../rl/utils/evaluation/evaluation.h"

RL_TOOLS_NAMESPACE_WRAPPER_START
namespace rl_tools::rl::loop::steps::evaluation{
    template<typename T_CONFIG, typename T_NEXT = typename T_CONFIG::NEXT::template State<typename T_CONFIG::NEXT>>
    struct State: T_NEXT {
        using CONFIG = T_CONFIG;
        using NEXT = T_NEXT;
        using T = typename CONFIG::T;
        using TI = typename CONFIG::TI;
        using RESULT_TYPE = rl::utils::evaluation::Result<typename CONFIG::EVALUATION_RESULT_SPEC>;
        MatrixDynamic<matrix::Specification<RESULT_TYPE, TI, 1, CONFIG::EVALUATION_PARAMETERS::N_EVALUATIONS>> evaluation_results;
        typename CONFIG::RNG rng_eval;
        Mode<nn::layers::gru::StepByStepMode<typename CONFIG::EVALUATION_PARAMETERS::EVALUATION_MODE, nn::layers::gru::StepByStepModeSpecification<TI>>> evaluation_mode;
        typename CONFIG::NN::ACTOR_TYPE::template Buffer<CONFIG::EVALUATION_PARAMETERS::NUM_EVALUATION_EPISODES> actor_deterministic_evaluation_buffers;
        typename NEXT::CONFIG::ENVIRONMENT_EVALUATION env_eval;
        typename NEXT::CONFIG::ENVIRONMENT_EVALUATION::Parameters env_eval_parameters;
        typename CONFIG::UI ui;
    };
}
RL_TOOLS_NAMESPACE_WRAPPER_END
#endif




