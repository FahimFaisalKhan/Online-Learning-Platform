import React, { useContext } from "react";
import { Button, Card, Form, Hero, Input } from "react-daisyui";
import { Link } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../Contexts/UserContext/UserContext";
import { MyThemeContext } from "../../Contexts/ThemeCntext/ThemeChangeContext";

const SignUnPage = () => {
  const { lightMode } = useContext(MyThemeContext);
  const { signUpWithMail } = useContext(AuthContext);
  const executeSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const img = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    signUpWithMail(email, password)
      .then((result) =>
        updateProfile(result.user, { displayName: name, photoURL: img })
          .then(() => {})
          .catch((er) => console.log(er.message))
      )
      .catch((e) => console.log(e.message));
  };
  return (
    <section className="min-h-[80vh] flex items-center">
      <Hero>
        <Hero.Content className="flex-col  bg-base-content rounded-sm py-24 px-8 min-w-[80vw] ">
          <div className="text-center  mb-5 ">
            <h1 className="text-5xl font-bold text-base-300">
              Sign up to get the full experience!
            </h1>
          </div>
          <Card
            className={`flex-shrink-0 w-full max-w-sm shadow-2xl ${
              lightMode ? "bg-gradient" : "bg-gradient-dark"
            } `}
          >
            <Card.Body>
              <Form onSubmit={executeSignUp}>
                <Form.Label title="Name" />
                <Input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input-bordered"
                  required
                />
                <Form.Label title="Photo" />
                <Input
                  type="url"
                  placeholder="Photo URL"
                  name="url"
                  className="input-bordered"
                  required
                />
                <Form.Label title="Email" />
                <Input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input-bordered"
                  required
                />
                <Form.Label title="Password" />
                <Input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input-bordered"
                  required
                />

                <Button
                  className="bg-base-content text-base-300 hover:text-base-content mt-5 capitalize border-none"
                  type="submit"
                >
                  Sign up
                </Button>
              </Form>
              <p className="ml-1 text-start text-xs font-medium mt-5">
                Already have an account? please
                <Link className="text-primary underline ml-1" to={"/signin"}>
                  Log in
                </Link>
                .
              </p>
            </Card.Body>
          </Card>
        </Hero.Content>
      </Hero>
    </section>
  );
};

export default SignUnPage;
