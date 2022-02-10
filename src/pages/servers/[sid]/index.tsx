import { GetServerSideProps } from 'next'

import { Channels, Data } from 'layouts/Channels'

export default function ServerPage({ data }: Data) {
  return <Channels data={data} />
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = require('data/data.js') as Data

  return {
    props: {
      data,
    },
  }
}
