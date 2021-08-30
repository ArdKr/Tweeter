import type { NextPage } from "next";

import { Button } from "base/components/button/button";

const Home: NextPage = () => {
  return (
    <Button onClick={() => alert(1)} variant="primary">
      test
    </Button>
  );
};

export default Home;
