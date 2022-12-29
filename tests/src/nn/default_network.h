#include <layer_in_c/nn/nn.h>
namespace lic = layer_in_c;

typedef float DTYPE;
constexpr size_t INPUT_DIM = 17;
constexpr size_t LAYER_1_DIM = 50;
constexpr lic::nn::activation_functions::ActivationFunction LAYER_1_FN =  lic::nn::activation_functions::RELU;
constexpr size_t LAYER_2_DIM = 50;
constexpr lic::nn::activation_functions::ActivationFunction LAYER_2_FN = lic::nn::activation_functions::RELU;
constexpr size_t OUTPUT_DIM = 13;
constexpr lic::nn::activation_functions::ActivationFunction OUTPUT_FN = lic::nn::activation_functions::IDENTITY;

typedef lic::nn_models::three_layer_fc::StructureSpecification<DTYPE, INPUT_DIM, LAYER_1_DIM, LAYER_1_FN, LAYER_2_DIM, LAYER_2_FN, OUTPUT_DIM, OUTPUT_FN> NETWORK_STRUCTURE_SPEC;
typedef lic::nn_models::three_layer_fc::AdamSpecification<lic::devices::Generic, NETWORK_STRUCTURE_SPEC, lic::nn::optimizers::adam::DefaultParametersTF<DTYPE>> NETWORK_SPEC;
typedef lic::nn_models::three_layer_fc::NeuralNetworkAdam<lic::devices::Generic, NETWORK_SPEC> NetworkType;

class NeuralNetworkTest : public ::testing::Test {
protected:
    std::string DATA_FILE_PATH = "../model-learning/data.hdf5";
    std::string model_name = "model_1";
    void SetUp() override {
        const char* data_file_path = std::getenv("LAYER_IN_C_TEST_NN_DATA_FILE");
        if (data_file_path != NULL){
            DATA_FILE_PATH = std::string(data_file_path);
//            std::runtime_error("Environment variable LAYER_IN_C_TEST_DATA_DIR not set. Skipping test.");
        }

        auto data_file = HighFive::File(DATA_FILE_PATH, HighFive::File::ReadOnly);
        data_file.getDataSet("data/X_train").read(X_train);
        data_file.getDataSet("data/Y_train").read(Y_train);
        data_file.getDataSet("data/X_val").read(X_val);
        data_file.getDataSet("data/Y_val").read(Y_val);
        data_file.getDataSet("data/X_mean").read(X_mean);
        data_file.getDataSet("data/X_std").read(X_std);
        data_file.getDataSet("data/Y_mean").read(Y_mean);
        data_file.getDataSet("data/Y_std").read(Y_std);
    }

    std::vector<std::vector<DTYPE>> X_train;
    std::vector<std::vector<DTYPE>> Y_train;
    std::vector<std::vector<DTYPE>> X_val;
    std::vector<std::vector<DTYPE>> Y_val;
    std::vector<DTYPE> X_mean;
    std::vector<DTYPE> X_std;
    std::vector<DTYPE> Y_mean;
    std::vector<DTYPE> Y_std;
};

