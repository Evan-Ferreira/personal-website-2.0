// app/_components/writing/Info.tsx
'use client';

import React, { useEffect, useState } from 'react';

interface InfoProps {
    title: string;
    date: string;
    titleId: string;
}

export default function Info({ title, date, titleId }: InfoProps) {
    const [views, setViews] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        async function bumpViews() {
            try {
                const res1 = await fetch(`/api/writing/${titleId}/views`, {
                    cache: 'no-store',
                });
                const { views: oldViews } = await res1.json();

                await fetch(`/api/writing`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        title: titleId,
                        views: oldViews + 1,
                    }),
                    cache: 'no-store',
                });

                if (isLoading) setViews(oldViews + 1);
            } catch (err) {
                console.error(err);
            }
        }

        bumpViews();
        setIsLoading(false);
    }, [titleId]);

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-white lg:text-6xl text-4xl font-bold tracking-widest">
                {title}
            </h1>
            <p className="text-[#969696] text-md flex items-center">
                {date} &ndash;&nbsp;
                {views === null ? (
                    // skeleton placeholder
                    <span className="inline-block h-4 w-14 bg-gray-700 animate-pulse rounded" />
                ) : (
                    <>{views} views</>
                )}
            </p>
            <div className="w-full h-[0.5px] bg-white" />
        </div>
    );
}
