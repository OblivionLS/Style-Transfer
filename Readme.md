![di logo](https://raw.githubusercontent.com/digitalideation/ba_222_gencg_h1901/master/docs/assets/images/di-logo-small.jpg "di logo")

# Fast Style Transfer with ML5

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

What things you need to install the software and how to install them

We found that using colab notebook to train the model was the easiest way of making it work.

Setup the Notebook
```
%tensorflow_version 2.x
```

### Installing

A step by step series of examples that tell you how to get a development env running

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

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc