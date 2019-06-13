# Demo app for the Outreach DevOps Challenge
This project is to be used in the DevOps Challenge exercise which is a part of
the Liatrio CSUC Outreach Program. The application uses a simple micro service
architecture consisting of a Django backend and a React frontend. When a user
submits text through the frontend it is sent to the backend. Django will
decrypt the text and return the result to React to be displayed.

There are several critical bugs in this project that will prevent the
application from launching. These are intentional and will need to be
solved to complete the DevOps challenge. While it may be helpful to have a
basic understanding of React and Django, you should be able to find the bugs
in the project with a basic understanding of programming concepts.

## Running the project
This project using [Docker](https://docs.docker.com/get-started/) and
[docker-compose](https://docs.docker.com/compose/overview/). Docker
allows us to stand up our applications in a containerized environment while 
`docker-compose` lets us orchestrate multiple containers in one file.

### Steps
Clone your fork of the repo and move into project
```
$ git clone https://github.com/[USERNAME]/apprentice-outreach-demo-application.git
$ cd apprentice-outreach-demo-application
```

Run the project:
```
$ docker-compose up
```

## Sample images
![](assets/welcome.png)
![](assets/submit.png)


