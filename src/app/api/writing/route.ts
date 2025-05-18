import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function PUT(request: NextRequest) {
    try {
        const { title, views } = await request.json();

        if (!title || typeof views !== 'number') {
            return NextResponse.json(
                {
                    error: 'Invalid input. Title and views (number) are required',
                },
                { status: 400 }
            );
        }

        const { data, error } = await supabase
            .from('articles')
            .update({ views })
            .eq('title', title)
            .select()
            .single();

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({
            message: 'Views updated successfully',
            views: data.views,
        });
    } catch (error) {
        return NextResponse.json({ error: error }, { status: 400 });
    }
}
