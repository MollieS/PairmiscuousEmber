# Pairmiscuous

This app is a currently unfinished.  Pairmiscuous is a team project originally built in rails, which I attempted to rebuild with Ember, a framework I had not previously used.  This repository contains the front end ember framework, built to interact with an api I built using Node and Express, which can be found here: https://github.com/MollieS/PairmiscuousAPI

Pairmiscuous is an app that we built in order to help students at Makers Academy find pair partners.  It should automatically generate a pair partner for the user, so to reduce the awkwardness of asking a fellow cohort member to pair and ensure that everyone is always paired.

## User stories
basic user stories:

```
As a maker
I want to be paired with someone
So that I can learn faster

As a bewildered maker
I want to see a list of everyone in my cohort
So that I know who these weird people are

As a promiscuous maker
I want to see a sorted list of people in my cohort that I have/have not paired with
So that I can keep pairing with more people

As a shy maker  
I want a pair partner to be randomly assigned to me  
So that I don’t have to ask them  

```

further user stories:

```
As a security-conscious maker
I want to be able to log in with a password
So that nobody can see my lists

As a lazy security-conscious maker
I want to sign in through github
So that I don't have to remember another password

As a curious maker
I want to see other students' github commit history
So that I can compare my progress to theirs

As a maker with many commits
I want to be preferentially paired with someone who has fewer commits
So that I can accelerate our learning by pairing together

```

## To Do

* As I have only had a day to work on this project, the front end is still in very early stages.  It can make get requests for cohort members from the Node/Express API
* I hope to be able to get at least the basic user stories working in the future.
* I also would like to add tests.  As this was an exercise I set myself in order to get more familiar with the ember-cli framework, and considering most of the work I have done has been based on the interaction with the API, I have not tested so far.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/MollieS/PairmiscuousEmber.git` this repository
* change into the new directory
* `npm install`
* `bower install`

## How to run

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).


### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Ember Information

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

