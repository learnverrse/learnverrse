export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_COURSE': {
      localStorage.setItem('newCourseData', JSON.stringify(action.payload));
      return {
        ...state,
        courseData: {
          ...action.payload,
        },
      };
    }

    case 'SAVE_COURSE_INFORMATION': {
      const updatedInfo = {
        ...state.courseData,
        title: action.payload.title,
        category: action.payload.category,
        description: action.payload.description,
      };
      localStorage.setItem('newCourseData', JSON.stringify(updatedInfo));
      return {
        ...state,
        courseData: updatedInfo,
      };
    }

    case 'SAVE_COURSE_CONTENT': {
      const updatedContent = {
        ...state.courseData,
        sections: action.payload.courseContent,
      };
      localStorage.setItem('newCourseData', JSON.stringify(updatedContent));
      return {
        ...state,
        courseData: updatedContent,
      };
    }
    case 'SAVE_COURSE_PRICING': {
      const updatedPricing = {
        ...state.courseData,
        subscription: action.payload.subscription,
        price: action.payload.price,
      };
      localStorage.setItem('newCourseData', JSON.stringify(updatedPricing));
      return {
        ...state,
        courseData: updatedPricing,
      };
    }

    default: {
      console.warn(`⚠️ Unhandled action type: ${action.type}`);
      return state;
    }
  }
};
