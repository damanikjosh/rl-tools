// Group 1
#include <layer_in_c/operations/cpu/group_1.h>
#include <layer_in_c/operations/cuda/group_1.h>

// Group 2
#include <layer_in_c/operations/cpu/group_2.h>
#include <layer_in_c/operations/cuda/group_2.h>

// Group 3
#include <layer_in_c/operations/cpu/group_3.h>
#include <layer_in_c/operations/cuda/group_3.h>

#include <layer_in_c/nn/operations_cuda.h>
#include <layer_in_c/nn_models/operations_generic.h>
#include <layer_in_c/nn_models/operations_cpu.h>

namespace lic = layer_in_c;

#include <gtest/gtest.h>

namespace copy{
    using DTYPE = float;
    using DEVICE_CPU = lic::devices::DefaultCPU;
    using DEVICE_CUDA = lic::devices::DefaultCUDA;

    constexpr DEVICE_CPU::index_t BATCH_SIZE = 100;
    constexpr DEVICE_CPU::index_t HIDDEN_DIM = BATCH_SIZE;

    template <typename T, typename TI, lic::nn::activation_functions::ActivationFunction ACTIVATION_FUNCTION>
    using StructureSpecification = lic::nn_models::mlp::StructureSpecification<T, TI, HIDDEN_DIM, HIDDEN_DIM, 3, HIDDEN_DIM, ACTIVATION_FUNCTION, lic::nn::activation_functions::RELU, BATCH_SIZE>;

    template <typename T, typename TI, lic::nn::activation_functions::ActivationFunction ACTIVATION_FUNCTION>
    using InferenceSpecification = lic::nn_models::mlp::AdamSpecification<StructureSpecification<T, TI, ACTIVATION_FUNCTION>, lic::nn::optimizers::adam::DefaultParametersTorch<DTYPE>>;

    constexpr DEVICE_CPU::index_t ITERATIONS = 10;
    constexpr DEVICE_CPU::index_t NAIVE_ITERATIONS = 1;
}

TEST(LAYER_IN_C_NN_CUDA, COPY) {
    using NetworkTypeCPU = lic::nn_models::mlp::NeuralNetworkAdam<copy::InferenceSpecification<copy::DTYPE, copy::DEVICE_CPU::index_t, lic::nn::activation_functions::RELU>>;
    using NetworkTypeCUDA = lic::nn_models::mlp::NeuralNetworkAdam<copy::InferenceSpecification<copy::DTYPE, copy::DEVICE_CUDA::index_t, lic::nn::activation_functions::RELU>>;
    copy::DEVICE_CPU::SPEC::LOGGING cpu_logger;
    copy::DEVICE_CUDA::SPEC::LOGGING cuda_logger;
    copy::DEVICE_CPU device_cpu(cpu_logger);
    copy::DEVICE_CUDA device_cuda(cuda_logger);
    NetworkTypeCPU network_cpu;
    NetworkTypeCPU network_cpu_2;
    NetworkTypeCUDA network_cuda;
    lic::malloc(device_cpu, network_cpu);
    lic::malloc(device_cpu, network_cpu_2);
    lic::malloc(device_cuda, network_cuda);

    auto rng = lic::random::default_engine(copy::DEVICE_CPU::SPEC::RANDOM());

    lic::init_weights(device_cpu, network_cpu, rng);
    lic::init_weights(device_cpu, network_cpu_2, rng);
    auto cpu_network_diff = lic::abs_diff(device_cpu, network_cpu, network_cpu_2);
    std::cout << "CPU network diff: " << cpu_network_diff << std::endl;
    ASSERT_GT(cpu_network_diff, 0);

    lic::copy(device_cuda, device_cpu, network_cuda, network_cpu);
    lic::copy(device_cpu, device_cuda, network_cpu_2, network_cuda);
    auto cpu_network_diff_round_trip = lic::abs_diff(device_cpu, network_cpu, network_cpu_2);
    std::cout << "CPU network round-trip: " << cpu_network_diff_round_trip << std::endl;
    ASSERT_FLOAT_EQ(cpu_network_diff_round_trip, 0);

    network_cpu.hidden_layers[0].weights.data[50] += 5;
    std::cout << "CPU network weights: " << network_cpu.hidden_layers[0].weights.data[50] << std::endl;

    cpu_network_diff = lic::abs_diff(device_cpu, network_cpu, network_cpu_2);
    std::cout << "CPU network diff: " << cpu_network_diff << std::endl;
    ASSERT_FLOAT_EQ(cpu_network_diff, 5);

    lic::copy(device_cuda, device_cpu, network_cuda, network_cpu);
    lic::copy(device_cpu, device_cuda, network_cpu_2, network_cuda);
    std::cout << "CPU network weights: " << network_cpu_2.hidden_layers[0].weights.data[50] << std::endl;
    cpu_network_diff_round_trip = lic::abs_diff(device_cpu, network_cpu, network_cpu_2);
    ASSERT_FLOAT_EQ(cpu_network_diff_round_trip, 0);
    std::cout << "CPU network round-trip: " << cpu_network_diff_round_trip << std::endl;

    lic::free(device_cpu, network_cpu);
    lic::free(device_cpu, network_cpu_2);
    lic::free(device_cuda, network_cuda);
}

template <typename T, typename TI, TI BATCH_SIZE>
void GEMM() {
    using DEVICE_CPU = lic::devices::DefaultCPU;
    using DEVICE_CUDA = lic::devices::DefaultCUDA;

    constexpr DEVICE_CPU::index_t HIDDEN_DIM = BATCH_SIZE;

    constexpr auto ACTIVATION_FUNCTION = lic::nn::activation_functions::RELU;
    using StructureSpecification = lic::nn_models::mlp::StructureSpecification<T, TI, HIDDEN_DIM, HIDDEN_DIM, 3, HIDDEN_DIM, ACTIVATION_FUNCTION, lic::nn::activation_functions::RELU, BATCH_SIZE>;

    using NNSpecification = lic::nn_models::mlp::AdamSpecification<StructureSpecification, lic::nn::optimizers::adam::DefaultParametersTorch<T>>;

    constexpr DEVICE_CPU::index_t ITERATIONS = 10;
    constexpr DEVICE_CPU::index_t NAIVE_ITERATIONS = 1;
    std::cout << "GEMM<" << (lic::utils::typing::is_same_v<T, float> ? "float" : "double") << ", " << BATCH_SIZE << ">" << std::endl;
    using NetworkTypeCPU = lic::nn_models::mlp::NeuralNetworkAdam<NNSpecification>;
    using NetworkTypeCUDA = lic::nn_models::mlp::NeuralNetworkAdam<NNSpecification>;
    DEVICE_CPU::SPEC::LOGGING cpu_logger;
    DEVICE_CUDA::SPEC::LOGGING cuda_logger;
    DEVICE_CPU device_cpu(cpu_logger);
    DEVICE_CUDA device_cuda(cuda_logger);
    NetworkTypeCPU network_cpu;
    typename NetworkTypeCPU::template Buffers<BATCH_SIZE> network_cpu_buffers;
    NetworkTypeCUDA network_cuda;
    typename NetworkTypeCPU::template Buffers<BATCH_SIZE> network_cuda_buffers;
    lic::malloc(device_cpu, network_cpu);
    lic::malloc(device_cpu, network_cpu_buffers);
    lic::malloc(device_cuda, network_cuda);
    lic::malloc(device_cpu, network_cuda_buffers);

    auto rng = lic::random::default_engine(DEVICE_CPU::SPEC::RANDOM());

    lic::init_weights(device_cpu, network_cpu, rng);
    lic::copy(device_cuda, device_cpu, network_cuda, network_cpu);

    lic::Matrix<lic::MatrixSpecification<T, DEVICE_CPU::index_t, BATCH_SIZE, NetworkTypeCPU::INPUT_DIM>> input_cpu;
    lic::malloc(device_cpu, input_cpu);
    lic::Matrix<lic::MatrixSpecification<T, DEVICE_CPU::index_t, BATCH_SIZE, NetworkTypeCPU::SPEC::STRUCTURE_SPEC::HIDDEN_DIM>> output_first_layer_cpu;
    lic::malloc(device_cpu, output_first_layer_cpu);
    lic::Matrix<lic::MatrixSpecification<T, DEVICE_CPU::index_t, BATCH_SIZE, NetworkTypeCPU::SPEC::STRUCTURE_SPEC::HIDDEN_DIM>> output_first_layer_cuda_cpu;
    lic::malloc(device_cpu, output_first_layer_cuda_cpu);

    for(typename NetworkTypeCPU::TI i = 0; i < BATCH_SIZE * NetworkTypeCPU::INPUT_DIM; ++i)
    {
        input_cpu.data[i] = lic::random::uniform_real_distribution(DEVICE_CPU::SPEC::RANDOM(), (T)0, (T)1, rng);
    }

    lic::Matrix<lic::MatrixSpecification<T, DEVICE_CUDA::index_t, BATCH_SIZE, NetworkTypeCPU::INPUT_DIM>> input_cuda;
    lic::malloc(device_cuda, input_cuda);
    lic::Matrix<lic::MatrixSpecification<T, DEVICE_CUDA::index_t, BATCH_SIZE, NetworkTypeCPU::SPEC::STRUCTURE_SPEC::HIDDEN_DIM>> output_first_layer_cuda;
    lic::malloc(device_cuda, output_first_layer_cuda);

    lic::copy(device_cuda, device_cpu, input_cuda, input_cpu);

    lic::evaluate(device_cpu, network_cpu.input_layer, input_cpu, output_first_layer_cpu);
    lic::evaluate(device_cuda, network_cuda.input_layer, input_cuda, output_first_layer_cuda);
    cudaDeviceSynchronize();

    lic::copy(device_cpu, device_cuda, output_first_layer_cuda_cpu, output_first_layer_cuda);
    auto evaluation_diff = lic::abs_diff(device_cpu, output_first_layer_cuda_cpu, output_first_layer_cpu)/(BATCH_SIZE * NetworkTypeCPU::SPEC::STRUCTURE_SPEC::HIDDEN_DIM);

    std::cout << "Evaluation diff: " << evaluation_diff << std::endl;
    ASSERT_LT(evaluation_diff, (lic::utils::typing::is_same_v<T, float> ? 1e-7 : 1e-15));

    {
        cudaDeviceSynchronize();
        auto start = std::chrono::high_resolution_clock::now();
        for(int i = 0; i < ITERATIONS; ++i)
        {
            lic::evaluate(device_cuda, network_cuda.input_layer, input_cuda, output_first_layer_cuda);
            cudaDeviceSynchronize();
        }
        auto end = std::chrono::high_resolution_clock::now();
        std::cout << "CUDA evaluation time: " << std::chrono::duration_cast<std::chrono::microseconds>(end - start).count() / ((T)ITERATIONS) << "us" << std::endl;
    }
}
TEST(LAYER_IN_C_NN_CUDA, GEMM) {
    GEMM<double, unsigned int, 256>();
    GEMM<double, unsigned int, 200>();
    GEMM<float, unsigned int, 200>();
    GEMM<float, unsigned int, 256>();
}
