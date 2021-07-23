import Link from 'next/link';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, {CheckboxProps} from '@material-ui/core/Checkbox';
import {useForm, SubmitHandler} from 'react-hook-form';

import MainPanelContainer from '../../atoms/MainPanelContainer';
import SectionTitle from '../../atoms/SectionTitle';
import PageContainer from '../../atoms/PageContainer';

import Nav from '../../organisms/Nav';
import Header from '../../organisms/Header/container';

type Inputs = {
  fullName: string,
  localization: string,
  specialization: string,
  category: string,
  aboutMe: string,
}

const RowContainer = styled.div`
	display: flex;
	aling-items: center;
`;

const BackLink = styled.a`
  display: flex;
  color: #F7367D;
  text-decoration: underline;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 16px;
  cursor: pointer;
	margin-right: 20px;
`;

const Form = styled.form`
	display: grid;
	grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
`;

const InputContainer = styled.div`
  margin-bottom: 30px;
`;

const FullWidthContainer = styled(InputContainer)`
  grid-column-start: 1;
  grid-column-end: 3;
`;

const Label = styled.label`
	display: block;
  margin-bottom: 5px;
	font-family: Roboto;
	font-style: normal;
	font-weight: 500;
	font-size: 10px;
	line-height: 16px;
	letter-spacing: 1.5px;
	text-transform: uppercase;
	color: #272E39;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background: ${props => props.disabled ? '#F2F3F7' : '#FFFFFF'};
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(21, 29, 56, 0.12);
  border-radius: 8px;
  padding-left: 15px;
`;

const Select = styled.select`
  width: 100%;
  height: 50px;
  font-size: 16px;
  background: #FFFFFF;
  border: none;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(21, 29, 56, 0.12);
  border-radius: 8px;
  padding-left: 15px;
`;

const MultilineInput = styled(Input)`
  min-height: 100px;
`;


const Categories = styled.div`
  background: #FFFFFF;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(21, 29, 56, 0.12);
  border-radius: 8px;
  padding: 5px;
`;

type Props = {
  session: Object,
}

const EditDataPanel = ({session}: Props) => {

  const {register, handleSubmit, formState: {errors}} = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = data => {
    // TODO: Invoke an action to update all the data in the database
  };

	return (
    <div className={'page'}>
      <Header session={session} alternative={true}/>
      <PageContainer>
        <Nav />
        <MainPanelContainer>
          <RowContainer>
            <Link href={'/dashboard/my-data'}>
              <BackLink>Cofnij</BackLink>
            </Link>
            <SectionTitle>Twoje dane</SectionTitle>
          </RowContainer>
          <Form>
            <div>
              <InputContainer>
                <Label>Email</Label>
                <Input disabled />
              </InputContainer>
              <InputContainer>
                <Label>Lokalizacja</Label>
                <Input {...register('localization', {required: true})}/>
              </InputContainer>
            </div>
            <div>
              <InputContainer>
                <Label>imie i nazwisko</Label>
                <Input {...register('fullName', {required: true})}/>
              </InputContainer>
              <InputContainer>
                <Label>Specjalizacja</Label>
                <Select {...register('specialization')} id="specialization">
                  <option value={'personal_trainer'}>Trener Personalny</option>
                  <option value={'nutritionist'}>Dietetyk</option>
                </Select>
              </InputContainer>
            </div>
            <FullWidthContainer>
              <Label>Kategorie</Label>
              <Categories>
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} name={'checkedA'}/>}
                  label="odchudzanie"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} name={'checkedA'}/>}
                  label="modelowanie pośladków"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} name={'checkedA'}/>}
                  label="budowa masy mięśniowej"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} name={'checkedA'}/>}
                  label="taniec na rurze"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} name={'checkedA'}/>}
                  label="treningi siłowe"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} name={'checkedA'}/>}
                  label="tenis"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} name={'checkedA'}/>}
                  label="pływanie"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} name={'checkedA'}/>}
                  label="body building"
                />
                <FormControlLabel
                  control={<Checkbox checked={false} onChange={() => {}} name={'checkedA'}/>}
                  label="lekkoatletyka"
                />
              </Categories>
            </FullWidthContainer>
            <FullWidthContainer>
              <Label>o tobie - opis</Label>
              <MultilineInput />
            </FullWidthContainer>
          </Form>
        </MainPanelContainer>
      </PageContainer>
    </div>
	)
};

export default EditDataPanel;
