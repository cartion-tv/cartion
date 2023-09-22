
#![no_std]
use gstd::{errors::Result, msg , prelude::*,ActorId};
use gmeta::{Metadata};
use hashbrown::HashMap;
use io::*;

#[cfg(feature = "binary-vendor")]
include!(concat!(env!("OUT_DIR"), "/wasm_binary.rs"));



static mut STATE:Option<HashMap<(ActorId, String),u128>> = None;



fn state_mut() -> &'static mut HashMap<(ActorId, String),u128> {

    let state = unsafe { STATE.as_mut()};

    unsafe { state.unwrap_unchecked() }


}


#[no_mangle]
extern "C" fn init () {

   unsafe { STATE = Some(HashMap::new())}


}

#[no_mangle]
extern "C" fn handle(){


    handle_state().expect("Execution Error")


}

    

fn handle_state() -> Result<()> {

        let payload = msg::load()?;

        if let Action::ValidateProject = payload {

            let currentstate = state_mut();

            currentstate.insert((msg::source(), 'Completed'),0);

            msg::reply(Event::Transfer,0)?;

        }
/* InProcess,
  InValidation,
  Completed
   */
        if let Action::RateProject = payload {

            let currentstate = state_mut();

            currentstate.insert((msg::source(), 'Completed'), 2);

            msg::reply(Event::Transfer,0)?;

        }

    Ok(())
    }



    #[no_mangle]
    extern "C" fn state() {

        // We create a state variable.
        let state: <ContractMetadata as Metadata>::State =
            state_mut().iter().map(|(k, v)| (*k, *v)).collect();
         
        // Generate response message
        msg::reply(state, 0).expect("failed to encode or reply from `state()`");
    }
