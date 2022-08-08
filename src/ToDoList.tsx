import { useForm } from "react-hook-form";

type IFormData = {
  errors: {
    email: {
      message: string;
    };
  };
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  password1: string;
};

function ToDoList() {
  const { register, handleSubmit, formState: { errors }, } = useForm<IFormData>({
    defaultValues: {
      email: "@naver.com",
    }
  });
  const onValid = (data: any) => {
    console.log(data);
  }
  console.log(errors);
  return (
    <div>
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit(onValid)}>
        <input {...register("email", {
          required: "Email is reuqired",
          pattern: {
            value: /^[A-Za-z0-9._%+-]+@naver\.com$/,
            message: "Only naver.com emails allowed",
          },
        })} placeholder="Email" />
        <span>{errors?.email?.message}</span>

        <input {...register("firstName", { required: "write here" })} placeholder="First Name" />
        <span>{errors?.firstName?.message}</span>

        <input {...register("lastName", { required: "write here" })} placeholder="Last Name" />
        <span>{errors?.lastName?.message}</span>

        <input {...register("username", {
          required: "write here",
          minLength: {
            value: 10,
            message: "Too short"
          }
        })
        } placeholder="Username" />
        <span>{errors?.username?.message}</span>

        <input {...register("password", {
          required: "write here",
          minLength: {
            value: 5,
            message: "Too short"
          }
        })
        } placeholder="Password" />
        <span>{errors?.password?.message}</span>

        <input {...register("password1", {
          required: "Password is required",
          minLength: {
            value: 5,
            message: "Your password is too short."
          }
        })
        } placeholder="Password1" />
        <span>{errors?.password1?.message}</span>

        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;