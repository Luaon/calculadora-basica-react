import { Button } from './components';
import { CalculatorBk } from './app-style';


export default function App() {
  return (
    <CalculatorBk>
      <Button label='C' name="x"/>
      <Button label='<' />
      <Button label='.' />
      <Button label='*' />
    </CalculatorBk>
  );
}