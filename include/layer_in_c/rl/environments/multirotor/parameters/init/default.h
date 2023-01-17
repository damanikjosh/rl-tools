
#include "../../multirotor.h"

namespace layer_in_c::rl::environments::multirotor::parameters::init{
    template<typename T, typename TI, TI ACTION_DIM>
    typename Parameters<T, TI, ACTION_DIM>::MDP::Initialization all_around = {
            2,
            1,
            0.5 * math::PI<T> * 2
    };
    template<typename T, typename TI, TI ACTION_DIM>
    typename Parameters<T, TI, ACTION_DIM>::MDP::Initialization simple = {
            0,
            0,
            0
    };
}
