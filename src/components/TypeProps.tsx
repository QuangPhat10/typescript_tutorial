type TypeProps = {
  name: string;
  count: number;
  isCheck: boolean;
};

const TypeProps = (props: TypeProps) => {
  return (
    <div>
      {props.isCheck
        ? `Có ${props.count} cách sửa dụng Props trong ${props.name}.`
        : `Không cách sửa dụng Props trong ${props.name}.`}
    </div>
  );
};

export default TypeProps;
