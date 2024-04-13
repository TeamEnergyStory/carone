import styled from 'styled-components';
import BusinessPartner from '../../../components/Main/BusinessPartner';
import { BUSINESS_PARTNER_CONTENTS } from '../../../constants/BUSINESS_PARTNER_CONTENTS';

function SgInfoBusinessPartner() {
  return (
    <>
      <S.Text>{BUSINESS_PARTNER_CONTENTS.SG.title}</S.Text>
      <S.Container>
        {BUSINESS_PARTNER_CONTENTS.SG.imageAddress.map((item, index) => {
          return <BusinessPartner imageAddress={item} key={index} />;
        })}
      </S.Container>
    </>
  );
}

export default SgInfoBusinessPartner;

const S = {
  Container: styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5rem;
  `,
  Text: styled.div`
    color: ${({ theme }) => theme.color.black};
    text-align: center;
    ${({ theme }) => theme.font.FONT20SB}
    margin-bottom: 4rem;
  `,
};
