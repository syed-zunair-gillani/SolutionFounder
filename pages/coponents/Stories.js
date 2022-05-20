import React from 'react';
import Link from 'next/link';
import Image from 'next/image'

export default function PostCard({ post }) {
  return (
    <>
      <div className="relative flex flex-col w-full bg-white rounded-md shadow-sh hover:shadow-shl">
        <div className="p-5 space-y-1">
          <h3 className="box-title">
            <a href={`stories/${post.uri}`}>{post.title}</a>
          </h3>

          <p className="text-base font-medium text-[#535353]">{post.excerpt}</p>
        </div>
        <div className="absolute bottom-0 right-0 flex justify-end">
          <Image
            src="/images/color-bar (1).jpg"
            alt="images/color-bar (1).jpg"
            className="w-[55%] h-[10px]"
            width={300}
            height={10}
          />
        </div>
      </div>
    </>
  );
}
