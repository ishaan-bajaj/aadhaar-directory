export const idlFactory = ({ IDL }) => {
  const Name = IDL.Text;
  const Aadhaar = IDL.Text;
  const Entry = IDL.Record({ 'Aadhaar' : Aadhaar, 'desc' : IDL.Text });
  return IDL.Service({
    'insert' : IDL.Func([Name, Entry], [], []),
    'lookup' : IDL.Func([Name], [IDL.Opt(Entry)], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
