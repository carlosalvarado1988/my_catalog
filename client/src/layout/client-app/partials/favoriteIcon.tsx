import React, { useState } from "react";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import styled from "styled-components";

interface Props {
  wished: boolean;
}
export const FavoriteIcon = React.memo(function Component({ wished }: Props) {
  const [wish, setWish] = useState(wished);
  console.log("wish: ", wish);
  return (
    <Wrapper
      wished={wish}
      onClick={(e) => {
        console.log("FavoriteIcon - e: ", e.target);
        e.preventDefault();
        setWish(!wish);
      }}
    >
      <HeartFilled className="filled" />
      <HeartOutlined className="outlined" />
    </Wrapper>
  );
});

const Wrapper = styled.div<Props>`
  color: red;
  font-size: 30px;
  .filled {
    display: ${({ wished }) => (wished ? "block" : "none")};
  }
  .outlined {
    display: ${({ wished }) => (wished ? "none" : "block")};
  }
  :hover {
    .filled {
      display: block;
    }
    .outlined {
      display: none;
    }
  }
`;
