import {useState} from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, {CheckboxProps} from '@material-ui/core/Checkbox';
import {useForm, SubmitHandler, Controller} from 'react-hook-form';

import SectionTitle from '../../atoms/SectionTitle';
import ActionButton from '../../atoms/ActionBtn';
import {mapTagToBool, mapTagToTitle, mapUserTypeToInputId} from '../../../lib';
import {UserDataEditionInputs, UserDataProps} from '../../lib/useUser';
import ProfileImage from '../../organisms/ProfileImage';

type Props = {
  userData: UserDataProps;
  updateUserData: (
    userData: UserDataProps, 
    newData: UserDataEditionInputs, 
    profileImage: File | void
  ) => void;
};

const EditDataPanel = ({userData, updateUserData}: Props) => {
  const [profileImageFile, setProfileImageFile] = useState(null);
  const tags = mapTagToBool(userData.tags);

  const {control, register, handleSubmit, formState: {errors}} = useForm<UserDataEditionInputs>({
    defaultValues: {
      fullName: `${userData.firstName} ${userData.lastName}`,
      city: userData.city,
      type: mapUserTypeToInputId(userData.type),
      '1': tags['1'],
      '2': tags['2'],
      '3': tags['3'],
      '4': tags['4'],
    }
  });

  const onSubmit: SubmitHandler<UserDataEditionInputs> = data => {
    updateUserData(userData, data, profileImageFile);
  };

  const handleChange = (file: File) => {
    setProfileImageFile(file)
  } 

	return (
    <>
      <RowContainer>
        <Link href={'/my-data'}>
          <BackLink>Cofnij</BackLink>
        </Link>
        <SectionTitle>Twoje dane</SectionTitle>
        </RowContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FullWidthContainer>
          <ProfileImage 
            inEditState={true} 
            imgUrl={userData.profilePhoto ? userData.profilePhoto.url : ''} 
            onChange={handleChange}
            width={"100px"} 
            height={"100px"}
          />
        </FullWidthContainer>
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
            <Input {...register('fullName', {required: true})} type={'text'} />
          </InputContainer>
          <InputContainer>
            <Label>Specjalizacja</Label>
            <Select {...register('type')} id="specialization">
              <option value={1}>Trener Personalny</option>
              <option value={2}>Dietetyk</option>
              <option value={3}>Klient</option>
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
                  defaultValue={tags[1]}
                  render={({ field }) => <Checkbox {...field} defaultValue={tags[1]} defaultChecked={tags[1]}/>}
                />
              }
              label={mapTagToTitle('1')}
            />
            <FormControlLabel
              defaultValue={tags['2']}
              control={
                <Controller 
                  name="2"
                  control={control}
                  defaultValue={tags[2]}
                  render={({ field }) => <Checkbox {...field} defaultValue={tags[2]} defaultChecked={tags[2]}/>}
                />
              }
              label={mapTagToTitle('2')}
            />
            <FormControlLabel
              control={
                <Controller 
                  name="3"
                  control={control}
                  defaultValue={tags[3]}
                  render={({ field }) => <Checkbox {...field} defaultValue={tags[3]} defaultChecked={tags[3]}/>}
                />
              }
              label={mapTagToTitle('3')}
            />
            <FormControlLabel
              control={
                <Controller 
                  name="4"
                  control={control}
                  defaultValue={tags[4]}
                  render={({ field }) => <Checkbox {...field} defaultValue={tags[4]} defaultChecked={tags[4]}/>}
                />
              }
              label={mapTagToTitle('4')}
            />
          </Categories>
        </FullWidthContainer>
        <FullWidthContainer>
          <Label>o tobie - opis</Label>
          <MultilineInput type={'text'} {...register('description')} defaultValue={userData.description}/>
        </FullWidthContainer>
        <ActionButton primary={true} className={'submitBtn'} type={'submit'} >Zapisz zmiany</ActionButton>
      </Form>
    </>
  );
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