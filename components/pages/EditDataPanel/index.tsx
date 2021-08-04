import Link from 'next/link';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, {CheckboxProps} from '@material-ui/core/Checkbox';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';

import MainPanelContainer from '../../atoms/MainPanelContainer';
import SectionTitle from '../../atoms/SectionTitle';
import PageContainer from '../../atoms/PageContainer';

import Nav from '../../organisms/Nav';
import Header from '../../organisms/Header/container';
import ActionButton from '../../atoms/ActionBtn';
import {mapTagToTitle} from '../../../lib';
import {useUserDataDispatch, UserDataEditionInputs, UserDataProps} from '../../../lib/contexts/UserDataProvider';
import { useRouter } from 'next/dist/client/router';

type Props = {
  session: Object,
  userData: UserDataProps
}

const EditDataPanel = ({session, userData}: Props) => {
  const router = useRouter();
  const {updateUserData} = useUserDataDispatch();
  const {control, register, handleSubmit, formState: {errors}} = useForm<UserDataEditionInputs>();

  const successCallback = () => {
    router.replace('/dashboard/my-data/');
  }

  const onSubmit: SubmitHandler<UserDataEditionInputs> = data => {
    console.log('data: ', data);
    updateUserData(userData, data, successCallback);

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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <InputContainer>
                <Label>Email</Label>
                <Input disabled defaultValue={userData.email} type={'text'}/>
              </InputContainer>
              <InputContainer>
                <Label>Miasto</Label>
                <Input {...register('city', {required: true})} type={'text'} defaultValue={userData.city} />
              </InputContainer>
            </div>
            <div>
              <InputContainer>
                <Label>imie i nazwisko</Label>
                <Input {...register('fullName', {required: true})} type={'text'} defaultValue={`${userData.firstName} ${userData.lastName}`} />
              </InputContainer>
              <InputContainer>
                <Label>Specjalizacja</Label>
                <Select {...register('type')} id="specialization">
                  <option value={'personal_trainer'}>Trener Personalny</option>
                  <option value={'nutritionist'}>Dietetyk</option>
                </Select>
              </InputContainer>
            </div>
            <FullWidthContainer>
              <Label>Kategorie</Label>
              <Categories>
                <FormControlLabel
                  control={
                    <Controller 
                      name="1"
                      control={control}
                      render={({ field }) => <Checkbox {...field}/>}
                    />
                  }
                  label={mapTagToTitle('1')}
                />
                <FormControlLabel
                  control={
                    <Controller 
                      name="2"
                      control={control}
                      render={({ field }) => <Checkbox {...field}/>}
                    />
                  }
                  label={mapTagToTitle('2')}
                />
                <FormControlLabel
                  control={
                    <Controller 
                      name="3"
                      control={control}
                      render={({ field }) => <Checkbox {...field}/>}
                    />
                  }
                  label={mapTagToTitle('3')}
                />
                <FormControlLabel
                  control={
                    <Controller 
                      name="4"
                      control={control}
                      render={({ field }) => <Checkbox {...field}/>}
                    />
                  }
                  label={mapTagToTitle('4')}
                />
                <FormControlLabel
                  control={
                    <Controller 
                      name="5"
                      control={control}
                      render={({ field }) => <Checkbox {...field}/>}
                    />
                  }
                  label={mapTagToTitle('5')}
                />
                <FormControlLabel
                  control={
                    <Controller 
                      name="6"
                      control={control}
                      render={({ field }) => <Checkbox {...field}/>}
                    />
                  }
                  label={mapTagToTitle('6')}
                />
                <FormControlLabel
                  control={
                    <Controller 
                      name="7"
                      control={control}
                      render={({ field }) => <Checkbox {...field}/>}
                    />
                  }
                  label={mapTagToTitle('7')}
                />
                <FormControlLabel
                  control={
                    <Controller 
                      name="8"
                      control={control}
                      render={({ field }) => <Checkbox {...field}/>}
                    />
                  }
                  label={mapTagToTitle('8')}
                />
              </Categories>
            </FullWidthContainer>
            <FullWidthContainer>
              <Label>o tobie - opis</Label>
              <MultilineInput type={'text'} {...register('description')} defaultValue={userData.description}/>
            </FullWidthContainer>
            <ActionButton primary={true} className={'submitBtn'} type={'submit'} >Zapisz zmiany</ActionButton>
          </Form>
        </MainPanelContainer>
      </PageContainer>
    </div>
	)
};

export default EditDataPanel;

const RowContainer = styled.div`
	display: flex;
	align-items: center;
`;

const BackLink = styled.a`
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

  .submitBtn {
    justify-self: end;
    grid-column-start: 2;
    width: 50%;
  }
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