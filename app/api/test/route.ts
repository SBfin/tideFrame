import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';
import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  console.log('API frame route called');
  /*
  const img_url = `${NEXT_PUBLIC_URL}/park-1.png`;
  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content= "${img_url}" />
  </head></html>`);
  }*/

  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'link',
          label: 'Tide protocol',
          target: 'https://landing.tideprotocol.xyz/',
        },
      ],
      image: {
        src: `${NEXT_PUBLIC_URL}/park-1.png`,
      },
    }),
  );
  }
export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';