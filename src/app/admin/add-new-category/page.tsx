import Input from "@/ui/input/Input";

const AddNewCategory = () => {
  return (
    <div className={"w-3/5 flex items-center "}>
      <div className={" w-full flex items-center flex-col gap-10"}>
        <h2 className="text-font-black font-extralight text-lg">
          Информация о новой категории
        </h2>
        <Input label={"Название категории"} name={"category"} type={"string"} />
        <div
          className={
            " cursor-pointer flex w-full bg-primary-1 text-white justify-center py-3 rounded-2xl "
          }
        >
          Добавить
        </div>
      </div>
    </div>
  );
};

export default AddNewCategory;
