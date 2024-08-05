import json
import zipfile
import os
# from torchtext.vocab import build_vocab_from_iterator
from torch.nn.utils.rnn import pad_sequence
from torch.utils.data import Dataset, DataLoader
import torch
import functools
from tqdm import tqdm

# Load the data
print("Loading the data:")
if os.path.exists("/Users"):
    full_data_path = "/Users/jonas/Downloads/00c2bfc7-57db-496e-9d5c-d62f8d8119e3.json.zip"
else:
    full_data_path = "/home/jonas/Downloads/00c2bfc7-57db-496e-9d5c-d62f8d8119e3.json.zip"

full_data = None
with zipfile.ZipFile(full_data_path, "r") as z:
    with z.open(os.path.basename(full_data_path)[:-4]) as f:
        full_data = json.load(f)

n_articles = 100

print("Concatenating the dataset")
def get_texts(data):
    for item in tqdm(data[:n_articles]):
        yield item['text']
long_text = "\n".join(get_texts(full_data)).encode("utf-8")

print("Chunking the dataset")
max_length = 64 + 1
chunks = [long_text[i:i + max_length] for i in tqdm(range(0, len(long_text)-max_length))]

# print("Building vocab")
# def yield_tokens(data):
#     for chunk in data:
#         yield chunk

# vocab = build_vocab_from_iterator(yield_tokens(chunks), specials=['<pad>', '<unk>'])
# vocab.set_default_index(vocab['<unk>'])

# Data Preprocessing
class TextDataset(Dataset):
    def __init__(self, data):
        self.raw_data = data
        self.max_length = max_length
        self.data = torch.zeros((len(data), max_length), dtype=torch.int64)
        for i in range(len(data)):
            text = self.raw_data[i]
            self.data[i, :] = torch.tensor(list(text), dtype=torch.int64)


    def __len__(self):
        return len(self.data)

    def __getitem__(self, idx):
        return self.data[idx, :-1], self.data[idx, 1:]

def collate_fn(batch):
    inputs, targets = zip(*batch)
    input_lengths = [len(seq) for seq in inputs]
    inputs_padded = pad_sequence(inputs, batch_first=True, padding_value=0)
    targets_padded = pad_sequence(targets, batch_first=True, padding_value=0)
    return inputs_padded, targets_padded, torch.tensor(input_lengths)

# Create dataset
dataset = TextDataset(chunks)