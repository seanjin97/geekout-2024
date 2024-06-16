---
sidebar_position: 3
---

# Hosting

## Why host??

<small>_U got ur api alr then now what, ownself call on localhost where got fun. Need to let people use ma, so we host it. Hosting options for backend servers. There's like 1 million of them._</small>

Some require you to put your card details before using.
Some setup a free database for you.
Some allow you to deploy docker images.
Some are easier to use than others.

**It depends on what you're looking for!!**

Here are some examples of cloud service providers in no particular order.

| Easy to use (more for hobby apps) | Harder to use, but you get more control (more for enterprise) |
| --------------------------------- | ------------------------------------------------------------- |
| Render                            | AWS                                                           |
| Firebase                          | Google Cloud                                                  |
| Railway                           | Microsoft Azure                                               |
| Fly.io                            | Cloudflare                                                    |
| Heroku                            | Oracle                                                        |
| Firebase                          | DigitalOcean                                                  |

For this exercise I'll just pick [Render](https://render.com/) randomly cuz it looks pretty easy to use and their [free tier](https://dashboard.render.com/billing#free-usage) looks pretty generous.

## Hosting with Render

1. Create an account with Render or login if you already have an existing account.
2. Create a new Web Service.

![create new web service](images/hosting/web-service.png)

3. Create a new GitHub repository (google it if you dk how) and push your Express.js server code there. It should look something like [this](https://github.com/seanjin97/geekout-2024/tree/master/backend/advanced/hosting).

4. Connect that GitHub code repository to Render.

![connect to a repo](images/hosting/connect-repo.png)

5. Fill in the launch details for your application as such.

![launch detail](images/hosting/launch-details.png)

6. Now wait for your server to be deployed. Once done, try hitting the endpoint that they provisioned for you.

![hosted](images/hosting/hosted.png)

and we now have a live API server. nice.

## Hol'up, isn't that a little too easy?

Ya it is, what these tools like Render do for you is that they make it super easy for you
to deploy your stuff.

Behind the scenes, they'll handle [containerisation](https://www.youtube.com/watch?v=IXifQ8mX8DE), networking, running your containers for you, and [CI/CD](https://www.youtube.com/watch?v=scEDHsr3APg).

This gives you a good developer experience for getting your stuff live. But then you don't learn anything from it.

## Optional Challenge: Deploying on Amazon Web Services (AWS)

Here's a little challenge for you. I think this is the hardest challenge. Search around or read up on tutorials to help you! Feel free to discuss in the [# backend-workshop](https://discord.com/channels/1224913680689266749/1224920594408144928) channel too!

Nowadays, almost all companies uses AWS to deploy their servers/ websites. So let's deploy our application on AWS Lambda and make it accessible over the internet. Here's what you're gonna build.

![architecture diagram](images/hosting/architecture.png)

### Steps at a high level

1. Using [Docker](https://www.docker.com/get-started/), containerise your application into a Docker image. Ownself go learn this if you dk. [This](https://www.youtube.com/watch?v=Gjnup-PuquQ) is a good place to start
2. Try running your docker container locally to test if it works. If it works, then it should work anywhere else. Take note of the ports you expose!
3. Create an AWS account, you should get free tier so you don't burn your money up.
4. Create an AWS ECR repository and push your docker image into an AWS ECR repository.
5. Create an AWS ECS Cluster, ECS Service and ECS Task definition that runs the Docker image from the AWS ECR repository that you created.
6. Call the public DNS addresss of your instance form your cluster to check if your application works!! If you've made it this far, you did it.

<small>_hint hint: https://github.com/aws-samples/amazon-ecs-demo-with-node-express_</small>
