import { GreetProps } from './greet.types'

export const Greet = (props: GreetProps) => {
  return <div>Greet {props.name ? props.name : 'Guest'}</div>
}
