import styled from "styled-components";
import Link from "next/link";
import Chip from "../../atoms/Chip";
type CardProps = {
  avatar?: string;
  name?: string;
  rating?: number;
  location?: string;
  title?: string;
  categories: { id: string; name: string }[] | undefined;
};

const Card = ({
  avatar,
  name,
  title,
  rating,
  location,
  categories,
}: CardProps) => {
  return (
    <CardContainer>
      <Link href={`#`} passHref>
        <CardImgWrapper>
          <CardImg
            style={{
              backgroundImage: `url(${avatar})`,
            }}
          />
        </CardImgWrapper>
      </Link>
      <CardContentWrapper>
        <Row>
          <span className="name">{name}</span>
          <span>{rating}</span>
        </Row>
        <Row>
          <span className="spanTitle">{title}</span>
          <span className="spanTitle">{location}</span>
        </Row>
        <ChipsWrapper>
          {categories?.map((category) => (
            <Chip key={`chip-${category.id}`} margin="0 8px 0 0">
              {category.name}
            </Chip>
          ))}
        </ChipsWrapper>
      </CardContentWrapper>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  min-height: 300px;
  width: 300px;
  overflow: hidden;
  margin: 0 20px 40px;
  background: #fff 50%;
  background-size: cover;
  border-radius: 5px;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.08),
    0 0.5rem 0.75rem rgba(0, 0, 0, 0.14);
`;
const CardImgWrapper = styled.a`
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 5px 5px 0 0;
`;
const CardImg = styled.div`
  width: auto;
  height: 200px;
  background: #c5d2d9 no-repeat 50%;
  background-size: cover;
`;

const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  .name {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 500;
  }

  .spanTitle {
    font-size: 12px;
    text-transform: uppercase;
  }
`;
const ChipsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
