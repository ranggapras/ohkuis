import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getQuiz = createAsyncThunk(
    'quiz/getQuiz',
    async(params, { rejectWithValue }) => {
        try {
            const res = await axios.get('https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple');
            console.log(res);
            return res.data.results;
        } catch (error) {
            if (!error.response) {
                throw error;
            }
            return rejectWithValue(error.response.data);
        }
    }
);