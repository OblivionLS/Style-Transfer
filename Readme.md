![di logo](https://raw.githubusercontent.com/digitalideation/ba_222_gencg_h1901/master/docs/assets/images/di-logo-small.jpg "di logo")

# Fast Style Transfer with ML5

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

We found that using colab notebook to train the model was the easiest way of making it work.

Setup the Notebook
```
%tensorflow_version 2.x
```

### Utilization

After setting up a new colab notebook with tensorflow 2.x, clone the fast style transfer repo
```
!git clone https://github.com/gu-ma/fast-style-transfer.git
```

Now, we start the setup.sh file in the "fast-style-transfer" folder. This will download and unzip the necessary files and will take some time. Ignore the disk space warning if it comes up and be aware, that notebook sessions might be stopped due to inactivity. There are ways like [this](https://gist.github.com/gu-ma/4c19e179c27b6d5769e0edb1e2fee846) to prevent this from happening. 
```
%cd fast-style-transfer/
!bash setup.sh
```

Cleanup and creating directories for later
```
!rm data/train2014.zip
!mkdir ckpts
!mkdir tests
```

Upload your style and test image and change the paths below.
```
#@title Parameters
style_img = ''  #@param
test_img = ''  #@param
ckpt_dir = ''  #@param
test_dir = ''  #@param
ckpt_iterations = 2000  #@param {type: "number"}
batch_size = 20   #@param {type: "number"}
epochs = 2 #@param {type: "number"}
```

Now we can run style.py with our parameters
```
!python style.py --style {style_img} \
  --checkpoint-dir {ckpt_dir} \
  --test {test_img} \
  --test-dir {test_dir} \
  --checkpoint-iterations {str(ckpt_iterations)} \
  --batch-size {str(batch_size)} \
  --epochs {str(epochs)} \
  --content-weight 1.5e1
  ```

At this point the model is trained and our checkpoint folder will contain several files. It would be wise to save the checkpoint folder.

To convert our model to  ML5.js follow those steps:
```
%tensorflow_version 1.x
```

```
%cd /content
!git clone https://github.com/reiinakano/fast-style-transfer-deeplearnjs.git
```

```
%cd fast-style-transfer-deeplearnjs
```

```
#@title Parameters
output_dir = 'outputfolder'  #@param
ckpt_file = '/content/fast-style-transfer/ckpts/fns.ckpt'  #@param
```

```
!mkdir {output_dir}
!python scripts/dump_checkpoint_vars.py --output_dir={output_dir} --checkpoint_file={ckpt_file}
!python scripts/remove_optimizer_variables.py --output_dir={output_dir}
```

Now lets create a ZIP for easier download
```
!zip -r /content/fast-style-transfer-deeplearnjs/{output_dir}/model.zip /content/fast-style-transfer-deeplearnjs/{output_dir}
```


## References

* [yining1023](https://github.com/yining1023/fast_style_transfer_in_ML5) 
* [reiinakano](https://github.com/reiinakano/fast-style-transfer-deeplearnjs)
* [tf.js](https://magenta.tensorflow.org/blog/2018/12/20/style-transfer-js/)


## Students

* [OblivionLS](https://github.com/OblivionLS)
* [De-eL](https://github.com/De-eL)
