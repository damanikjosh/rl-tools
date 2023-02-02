#ifndef LAYER_IN_C_OPERATIONS_CPU_MKL_GROUP_1
    #define LAYER_IN_C_OPERATIONS_CPU_MKL_GROUP_1
    #include <mkl.h>
    #include <layer_in_c/devices/cpu_mkl.h>
    #include <layer_in_c/math/operations_cpu.h>
    #include <layer_in_c/random/operations_cpu.h>
    #include <layer_in_c/logging/operations_cpu.h>
#else
    #error "Group 1 already imported"
#endif
