import React from 'react';
import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <>
      <div className="w-full relative flex rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
        <div className="p-5 space-y-1">
          <h3 className="box-title">
            <a href={`stories/${post.uri}`}>{post.title}</a>
          </h3>

          <p className="text-base font-medium text-[#535353]">{post.excerpt}</p>
        </div>
        <div className="flex justify-end absolute right-0 bottom-0">
          <img
            src="/images/color-bar (1).jpg"
            alt="images/color-bar (1).jpg"
            className="w-[55%] h-[10px]"
          />
        </div>
      </div>
    </>
  );
}
