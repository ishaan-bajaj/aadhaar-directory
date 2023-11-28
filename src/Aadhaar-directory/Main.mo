import Map "mo:base/HashMap";
import Text "mo:base/Text";

actor {

  type Name = Text;
  type Aadhaar = Text;

  type Entry = {
    desc: Text;
    Aadhaar: Aadhaar;
  };

  let Aadhaardirectory = Map.HashMap<Name, Entry>(0, Text.equal, Text.hash);

  public func insert(name : Name, entry : Entry): async () {
    Aadhaardirectory.put(name, entry);
  };

  public query func lookup(name : Name) : async ?Entry {
    Aadhaardirectory.get(name)
  };
};
