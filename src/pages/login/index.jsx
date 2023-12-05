import Button from '../../components/button';
import Input from '../../components/input';

const Login = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <form className="w-full md:w-2/6 px-6 border rounded-xl py-3">
        <section className="text-center my-4">
          <h3 className=" text-stochostech text-2xl font-bold">Stochostech</h3>
          <p className="my-2 text-xl">Welcome Back</p>
          <p>Please enter your Account details</p>
        </section>
        <Input placeholder="Email" name="email" type="email" />
        <Input placeholder="Password" name="password" type="password" />
        <div className="my-6">
          <Button text={'Login'} />
        </div>
      </form>
    </section>
  );
};

export default Login;
