import { createSlice, createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import propertyService from './propertyServices';

//
const initialState = {
  properties: [],
  projects: [],
  requests: [],
  blogs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
};

// Properties
export const allProperty = createAsyncThunk('property/get-properties', async (token, thunkAPI) => {
  try {
    return await propertyService.allProperty(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getAproperty = createAsyncThunk('property/get-a-property', async (ids, thunkAPI) => {
  try {
    return await propertyService.getAproperty(ids);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const postProperty = createAsyncThunk('property/post-property', async (data, thunkAPI) => {
  try {
    return await propertyService.postProperty(data);
  } catch (error) {
    toast.error('Property Post Failed, try again');
    return thunkAPI.rejectWithValue(error);
  }
});

// Projects
export const allProject = createAsyncThunk('project/get-project', async (token, thunkAPI) => {
  try {
    return await propertyService.allProject(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const getAproject = createAsyncThunk('project/get-a-project', async (ids, thunkAPI) => {
  try {
    return await propertyService.getAproject(ids);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const postProj = createAsyncThunk('project/post-project', async (data, thunkAPI) => {
  try {
    return await propertyService.postProj(data);
  } catch (error) {
    toast.error('Project Post Failed, try again');
    return thunkAPI.rejectWithValue(error);
  }
});

// Requests
export const allRequest = createAsyncThunk('request/get-request', async (token, thunkAPI) => {
  try {
    return await propertyService.allRequest(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getaRequest = createAsyncThunk('request/get-a-request', async (ids, thunkAPI) => {
  try {
    return await propertyService.getaRequest(ids);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// Blog
export const allBlog = createAsyncThunk('blog/get-blog', async (token, thunkAPI) => {
  try {
    return await propertyService.allBlog(token);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
export const getABlog = createAsyncThunk('blog/get-a-blog', async (ids, thunkAPI) => {
  try {
    return await propertyService.getABlog(ids);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const postBlog = createAsyncThunk('blog/post-blog', async (data, thunkAPI) => {
  try {
    return await propertyService.postBlog(data);
  } catch (error) {
    toast.error('Project Post Failed, try again');
    return thunkAPI.rejectWithValue(error);
  }
});

export const resetState = createAction('Reset_all');
//
export const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder //  Properties
      .addCase(allProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allProperty.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.properties = action.payload;
        state.message = 'success';
      })
      .addCase(allProperty.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(getAproperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAproperty.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.property = action.payload;
        state.message = 'success';
      })
      .addCase(getAproperty.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(postProperty.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postProperty.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.postedProperty = action.payload;
        state.message = 'successfully posted';
      })
      .addCase(postProperty.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })

      //  Projects
      .addCase(allProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allProject.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.projects = action.payload;
        state.message = 'success';
      })
      .addCase(allProject.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(getAproject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAproject.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.project = action.payload;
        state.message = 'success';
      })
      .addCase(getAproject.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(postProj.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postProj.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.postedProject = action.payload;
        state.message = 'success';
      })
      .addCase(postProj.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      //  Requests
      .addCase(allRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allRequest.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.requests = action.payload;
        state.message = 'success';
      })
      .addCase(allRequest.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(getaRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getaRequest.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.singleRequest = action.payload;
        state.message = 'success';
      })
      .addCase(getaRequest.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      //  Blogs
      .addCase(allBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(allBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.blogs = action.payload;
        state.message = 'success';
      })
      .addCase(allBlog.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(getABlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getABlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.singleBlog = action.payload;
        state.message = 'success';
      })
      .addCase(getABlog.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(postBlog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBlog.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.postedBlog = action.payload;
        state.message = 'success';
      })
      .addCase(postBlog.rejected, (state, action) => {
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
        state.isLoading = false;
      })
      .addCase(resetState, () => initialState);
  },
});

// export const {} = propertySlice.actions;
export default propertySlice.reducer;
