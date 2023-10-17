import { generateRandomId } from "@/utils/generateRandomId";
import { createSlice } from "@reduxjs/toolkit";

export interface Children {
  id: string;
  childAge: number;
}

export interface Infants {
  id: string;
  infantsAge: number;
}

export interface RoomDetails {
  id: string;
  adultCounter: number;
  children: Children[];
  infants: Infants[];
}
interface RoomsState {
  count: number;
  values: RoomDetails[];
}

const INITIAL_STATE: RoomsState = {
  count: 1,
  values: [
    {
      id: generateRandomId(11),
      adultCounter: 1,
      children: [],
      infants: [],
    },
  ],
};

export const roomsSlice = createSlice({
  name: "room",
  initialState: INITIAL_STATE,
  reducers: {
    incrementRoomCount: (state) => {
      if (state.count === 6) {
        return;
      } else {
        const newRoomId = generateRandomId(11);
        state.count += 1;
        state.values.push({
          id: newRoomId,
          adultCounter: 1,
          children: [],
          infants: [],
        });
      }
    },
    decrementRoomCount: (state, action) => {
      const roomIdToDelete = action.payload; // Pass the ID of the room to delete as payload.
      const roomIndex = state.values.findIndex(
        (room) => room.id === roomIdToDelete
      );

      if (roomIndex !== -1) {
        state.count -= 1;
        state.values.splice(roomIndex, 1); // Remove the room with the specified ID.
      }
    },
    decrementRoomByLastIndex: (state) => {
      if (state.count > 1) {
        state.count -= 1;
        state.values.pop(); // Remove the last room in the array.
      }
    },
    incrementAdultCount: (state, action) => {
      const { roomId } = action.payload;
      const room = state.values.find((room) => room.id === roomId);

      if (room) {
        room.adultCounter += 1;
      }
    },
    decrementAdultCount: (state, action) => {
      const { roomId } = action.payload;
      const room = state.values.find((room) => room.id === roomId);

      if (room && room.adultCounter > 1) {
        room.adultCounter -= 1;
      }
    },
    incrementChildCount: (state, action) => {
      const { roomId } = action.payload;
      const room = state.values.find((room) => room.id === roomId);

      if (room) {
        room.children.push({ id: generateRandomId(11), childAge: 2 }); // Add a new child to the room
      }
    },

    // Decrement the number of children in a specific room
    decrementChildCount: (state, action) => {
      const { roomId } = action.payload;
      const room = state.values.find((room) => room.id === roomId);

      if (room && room.children.length > 0) {
        room.children.pop(); // Remove the last child from the room
      }
    },

    // Increment the number of infants in a specific room
    incrementInfantCount: (state, action) => {
      const { roomId } = action.payload;
      const room = state.values.find((room) => room.id === roomId);

      if (room) {
        room.infants.push({ id: generateRandomId(11), infantsAge: 0 }); // Add a new infant to the room
      }
    },

    // Decrement the number of infants in a specific room
    decrementInfantCount: (state, action) => {
      const { roomId } = action.payload;
      const room = state.values.find((room) => room.id === roomId);

      if (room && room.infants.length > 0) {
        room.infants.pop(); // Remove the last infant from the room
      }
    },
    changeChildAge: (state, action) => {
      const { roomId, childId, newAge } = action.payload;
      const room = state.values.find((room) => room.id === roomId);

      if (room) {
        const childToUpdate = room.children.find(
          (child) => child.id === childId
        );

        if (childToUpdate) {
          childToUpdate.childAge = newAge;
        }
      }
    },

    // Change the age of a specific infant in a room
    changeInfantAge: (state, action) => {
      const { roomId, infantId, newAge } = action.payload;
      const room = state.values.find((room) => room.id === roomId);

      if (room) {
        const infantToUpdate = room.infants.find(
          (infant) => infant.id === infantId
        );

        if (infantToUpdate) {
          infantToUpdate.infantsAge = newAge;
        }
      }
    },
  },
});

export const getTotalCounts = (values: RoomDetails[]) => {
  // Initialize counts for adults, children, and infants
  let totalAdults = 0;
  let totalChildren = 0;
  let totalInfants = 0;

  // Iterate through each room and accumulate counts
  values.forEach((room: RoomDetails) => {
    totalAdults += room.adultCounter;
    totalChildren += room.children.length;
    totalInfants += room.infants.length;
  });

  return {
    totalAdults,
    totalChildren,
    totalInfants,
  };
};

export const {
  incrementRoomCount,
  decrementRoomCount,
  decrementRoomByLastIndex,
  incrementAdultCount,
  decrementAdultCount,
  changeChildAge,
  changeInfantAge,
  decrementChildCount,
  decrementInfantCount,
  incrementChildCount,
  incrementInfantCount,
} = roomsSlice.actions;
export default roomsSlice.reducer;
