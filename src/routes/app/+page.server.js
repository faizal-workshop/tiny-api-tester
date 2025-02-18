import { VITE_BACKEND } from '$env/static/private';
import { error } from '@sveltejs/kit';
import axios from 'axios';

export async function load({ request, url }) {
    const referer = request.headers.get('referer');

    if (!referer || !referer.includes(url.origin)) {
        throw error(404, 'Not Found');
    }
}
