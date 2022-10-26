import React from "react";
import { Button, Card, Form, Hero, Input } from "react-daisyui";
import { Link } from "react-router-dom";

const SignUnPage = () => {
  return (
    <section className="min-h-[80vh] flex items-center">
      <Hero>
        <Hero.Content className="flex-col  bg-base-content rounded-sm py-24 px-8 min-w-[80vw] ">
          <div className="text-center  mb-5 ">
            <h1 className="text-5xl font-bold text-base-300">
              Sign up to get the full experience!
            </h1>
          </div>
          <Card className="flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient">
            <Card.Body>
              <Form>
                <Form.Label title="Name" />
                <Input
                  type="text"
                  placeholder="name"
                  className="input-bordered"
                />
                <Form.Label title="Photo" />
                <Input
                  type="url"
                  placeholder="Photo URL"
                  className="input-bordered"
                />
                <Form.Label title="Email" />
                <Input
                  type="email"
                  placeholder="email"
                  className="input-bordered"
                />
                <Form.Label title="Password" />
                <Input
                  type="password"
                  placeholder="password"
                  className="input-bordered"
                />

                <Button
                  className="bg-base-content text-base-300 mt-5 capitalize border-none"
                  type="submit"
                >
                  Sign up
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Hero.Content>
      </Hero>
    </section>
  );
};

export default SignUnPage;
