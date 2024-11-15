
#define RL_TOOLS_DEVICES_DISABLE_REDEFINITION_DETECTION

#include <thread>
#include <rl_tools/operations/cpu.h>
#include <rl_tools/operations/cpu_mkl.h>
namespace rlt = rl_tools;
using DEVICE = rlt::devices::DefaultCPU;
using DEVICE_MKL = rlt::devices::DefaultCPU_MKL;
using T = float;
using TI = typename DEVICE::index_t;


#include <chrono>

namespace rl_tools{
    template<typename DEVICE_SPEC, typename INPUT_SPEC_A, typename INPUT_SPEC_B, typename OUTPUT_SPEC>
    void multiply(rlt::devices::CPU<DEVICE_SPEC>& device, const rlt::Matrix<INPUT_SPEC_A>& A, const rlt::Matrix<INPUT_SPEC_B>& B, rlt::Matrix<OUTPUT_SPEC>& C) {
        static_assert(INPUT_SPEC_A::ROWS == OUTPUT_SPEC::ROWS);
        static_assert(INPUT_SPEC_A::COLS == INPUT_SPEC_B::ROWS);
        static_assert(INPUT_SPEC_B::COLS == OUTPUT_SPEC::COLS);

        using T = typename OUTPUT_SPEC::T;
        using TI = typename DEVICE::index_t;

        constexpr TI M = INPUT_SPEC_A::ROWS;
        constexpr TI N = INPUT_SPEC_B::COLS;
        constexpr TI K = INPUT_SPEC_A::COLS;

        T * __restrict__ A_data = A._data;
        T * __restrict__ B_data = B._data;
        T * __restrict__ C_data = C._data;

        // Initialize C to zero (if necessary)
        for (size_t i = 0; i < M * N; ++i) {
            C_data[i] = 0.0f;
        }

        // Matrix multiplication
        for (size_t i = 0; i < M; ++i) {
            for (size_t k_idx = 0; k_idx < K; ++k_idx) {
                float A_val = A_data[i * K + k_idx];
                for (size_t j = 0; j < N; ++j) {
                    C_data[i * N + j] += A_val * B_data[k_idx * N + j];
                }
            }
        }
    }
}

template <TI ITERATIONS, typename DEVICE, typename SPEC_A, typename SPEC_B, typename SPEC_C>
void benchmark(DEVICE& device, rlt::Matrix<SPEC_A>& A, rlt::Matrix<SPEC_B>& B, rlt::Matrix<SPEC_C>& C, std::string device_name, bool print = true){
    constexpr TI M = SPEC_C::ROWS;
    constexpr TI N = SPEC_C::COLS;
    constexpr TI K = SPEC_A::COLS;
    constexpr TI FLOPS = 2 * M * N * K * ITERATIONS;
    auto now = std::chrono::high_resolution_clock::now();
    for(TI i = 0; i < ITERATIONS; i++){
        rlt::multiply(device, A, B, C);
    }
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> elapsed = end - now;
    T checksum = 0;
    for(TI i = 0; i < M; ++i){
        for(TI j = 0; j < N; ++j){
            checksum += rlt::get(C, i, j);
        }
    }
    if(print){
        std::cout << "        Device: " << device_name << std::endl;
        std::cout << "            Checksum: " << checksum << std::endl;
        std::cout << "            Elapsed time: " << elapsed.count() << "s" << std::endl;
        std::cout << "            GFLOPS: " << FLOPS / elapsed.count() / 1e9 << std::endl;
    }
}

template <TI M, TI N, TI K, TI ITERATIONS, bool DYNAMIC_ALLOCATION>
void matmul(){
    DEVICE device;
    DEVICE_MKL device_mkl;
    auto rng = rlt::random::default_engine(device.random);

    rlt::Matrix<rlt::matrix::Specification<T, TI, M, K, DYNAMIC_ALLOCATION>> A;
    rlt::Matrix<rlt::matrix::Specification<T, TI, K, N, DYNAMIC_ALLOCATION>> B;
    rlt::Matrix<rlt::matrix::Specification<T, TI, M, N, DYNAMIC_ALLOCATION>> C, C_target;
    if constexpr(DYNAMIC_ALLOCATION){
        rlt::malloc(device, A);
        rlt::malloc(device, B);
        rlt::malloc(device, C);
    }
    rlt::randn(device, A, rng);
    rlt::randn(device, B, rng);
    std::cout << "    M: " << M << " N: " << N << " K: " << K << std::endl;
    benchmark<20>(device_mkl, A, B, C, "mkl", false);
    benchmark<ITERATIONS>(device_mkl, A, B, C, "mkl");
    benchmark<20>(device, A, B, C, "generic", false);
    benchmark<ITERATIONS/10>(device, A, B, C, "generic");

}

int main(){
    // stack
    // std::cout << "Stack" << std::endl;
    // matmul<32, 32, 32, 1000000, false>();
    // matmul<64, 64, 64, 100000, false>();
    // matmul<128, 128, 128, 10000, false>();
    // heap
    std::cout << "Heap" << std::endl;
    matmul<32, 32, 32, 1000000, true>();
    matmul<64, 64, 64, 100000, true>();
    matmul<128, 128, 128, 10000, true>();
    // matmul<256, 256, 256, 1000, true>();
    // matmul<512, 512, 512, 100, true>();
    // matmul<1024, 1024, 1024, 10, true>();
    return 0;
}
