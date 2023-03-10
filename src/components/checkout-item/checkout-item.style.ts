import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
  `,
  ImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  `,
  RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
  `,
  Arrow = styled.div`
    cursor: pointer;
  `,
  Value = styled.span`
    margin: 0 10px;
  `,
  BaseSpan = styled.span`
    width: 23%;
  `,
  Quantity = styled(BaseSpan)`
    display: flex;
  `;
