import { useForm } from "react-hook-form";

type IFormData = {
  toDo: string
};

function ToDoList() {
  const {
    register, handleSubmit, setValue
  } = useForm<IFormData>();
  const handleValid = (data: IFormData) => {
    console.log("add to do", data.toDo);
    setValue("toDo", "");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("toDo", {
          required: "Please write a To Do",
        })} placeholder="Write a to do" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;