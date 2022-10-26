import React from "react";
import { Button, Card, Form, Hero, Input } from "react-daisyui";
import { Link } from "react-router-dom";
import "./SignInPage.css";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

const SignInPage = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <Hero>
        <Hero.Content className="flex-col  bg-base-content rounded-sm py-24 px-8 min-w-[80vw] ">
          <div className="text-center  mb-5 ">
            <h1 className="text-5xl font-bold text-base-300">Login now!</h1>
          </div>
          <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient">
            <Card.Body>
              <Form>
                <Form.Label title="Email" />
                <Input
                  type="text"
                  placeholder="email"
                  className="input-bordered"
                />
                <Form.Label title="Password" />
                <Input
                  type="text"
                  placeholder="password"
                  className="input-bordered"
                />
                <label className="label ">
                  <Link
                    href="#"
                    className="label-text-alt text-base-content"
                    hover="true"
                  >
                    Forgot password?
                  </Link>
                </label>
                <Button
                  className="bg-base-content text-base-300 mt-5 capitalize border-none"
                  type="submit"
                >
                  Login
                </Button>
                <Button className="bg-base-content text-base-300 mt-3  border-none">
                  <FcGoogle size={25}></FcGoogle>
                  <p className="ml-[-1.5rem] capitalize">
                    Sign <span className="lowercase">in with google</span>
                  </p>
                </Button>
                <Button className="bg-base-content text-base-300 mt-3  border-none">
                  <BsGithub size={25}></BsGithub>
                  <p className="ml-[-1.5rem] capitalize">
                    Sign <span className="lowercase">in with github</span>
                  </p>
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Hero.Content>
      </Hero>
    </section>
  );
};

export default SignInPage;
