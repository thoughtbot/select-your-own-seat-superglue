Select Your Own Seat
===

This application is an example of how to develop an interactive web page using:

* Rails
* Superglue
* Superglue' Unobtrustive JavaScript
* React
* Redux

The commit history is intentionally meticulous and verbose, and serves to compare
and contrast with equivalent [commits] built in [Stimulus and Turbo].


The intent behind this repository is to:

* demonstrate how egronomics can be markedly simliar between the normal rails
  version and superglue version.
* serve as an example of real-world application built with all the conviences of a
  server-rendered monolith with React.
* demonstrate how, despite written in react, that ultimately we rely on knowledge
  of boring standards based HTML.
* demonstrate the strengths as well as weakenesses of both approaches.

For more context please see the [Stimulus and Turbo] version of the repo

[commits]: https://github.com/seanpdoyle/select-your-own-seat/commits/main
[Stimulus and Turbo]: https://github.com/seanpdoyle/select-your-own-seat

---

To develop the application locally, check it out with `git` then run the setup
script:

```bash
$ git clone git@github.com:thoughtbot/select-your-own-seat-superglue.git
$ cd select-your-own-seat-superglue
$ bin/setup
$ yarn install
$ yarn run build
$ yarn run build:css
$ rails server
```

Once the `rails server` command is running, visit the page at
<http://localhost:3000>.
