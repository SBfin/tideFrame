import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Visit tide Protocol',
      action: 'link',
      target: `https://landing.tideprotocol.xyz/`,
    },
    {
      action: 'post',
      label: 'Know more about tide',
    },
  ],
  image: {
    src: `${NEXT_PUBLIC_URL}/park-3.png`,
    aspectRatio: '1:1',
  },
  input: {
    text: 'Tell me a story',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/test`,
});

export const metadata: Metadata = {
  title: 'tideprotocol.xyz',
  description: 'Intro to tide',
  openGraph: {
    title: 'tideprotocol.xyz',
    description: 'LFG',
    images: [`${NEXT_PUBLIC_URL}/park-1.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>silvio.xyz</h1>
    </>
  );
}
