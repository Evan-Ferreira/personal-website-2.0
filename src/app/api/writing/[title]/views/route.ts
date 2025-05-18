import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ title: string }> }
): Promise<NextResponse> {
    const { title } = await params;

    const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('title', title)
        .single();

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    if (!data) {
        return NextResponse.json(
            { error: 'Article not found' },
            { status: 404 }
        );
    }

    return NextResponse.json({ views: data.views });
}
