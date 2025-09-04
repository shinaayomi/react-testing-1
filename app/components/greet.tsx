type GreetProps = {
  name?: string;
};

export const Greet = (props: GreetProps) => {
  return <div>Greet {props.name}</div>;
};
