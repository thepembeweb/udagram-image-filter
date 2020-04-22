# Udagram Image Filter App

> This project demonstrates how to deploy a static website to AWS.

![](aws-ebs.png)

![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

The cloud is perfect for hosting static websites that only include HTML, CSS, and JavaScript files that require no server-side processing. This project demonstrates how to deploy a static website to AWS. The first step is to create a S3 bucket and upload the website files to your bucket. Next is to configure the bucket for website hosting and secure it using IAM policies. Afterwards, to speed up content delivery using AWS’ content distribution network service, CloudFront is used. Lastly, the website can then be accessed in a browser using the unique CloudFront endpoint.

## Installation

### Setup

Clone the source locally:

```sh
$ git clone https://github.com/thepembeweb/udagram-image-filter.git
$ cd udagram-image-filter
```

If you're on Debian or Ubuntu, you'll also need to install
`nodejs-legacy`:

Use your package manager to install `npm`.

```sh
$ sudo apt-get install npm nodejs-legacy
```

Install project dependencies:

```sh
$ npm install
```

Start the development server:

```sh
$ npm run dev
```

Alternatively you can view the live App URL [here](http://udagram-image-filter-dev.us-west-2.elasticbeanstalk.com/).

### Deploying the system

* Create a new application on Elastic Beanstalk: `eb init`
* Create a new environment on Elastic Beanstalk: `eb create`
* Deploy to Elastic Beanstalk: `eb deploy`

* **Website URL:** http://udagram-image-filter-dev.us-west-2.elasticbeanstalk.com/

## Built With

- [AWS Elastic Beanstalk](https://aws.amazon.com/elasticbeanstalk/) - AWS deployment and scaling service used
- [Node.js®](https://nodejs.org/) - The JavaScript runtime used
- [Express.js®](https://nodejs.org/) - The web application framework used

## Authors

* **[Pemberai Sweto](https://github.com/thepembeweb)** - *Initial work* - [Udagram Image Filter App](https://github.com/thepembeweb/udagram-image-filter)

## License

[![License](http://img.shields.io/:license-mit-green.svg?style=flat-square)](http://badges.mit-license.org)

- This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
- Copyright 2020 © [Pemberai Sweto](https://github.com/thepembeweb).

