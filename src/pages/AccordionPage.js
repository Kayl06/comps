import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: '123asd',
      label: "Can I use React on a project?",
      content: "Lorem ipmsumewq ferer kwek yes lasdas klajsdkja mansm,neklajsd",
    },
    {
      id: 'a23jswe',
      label: "Can I use React on a bowl?",
      content: "Lorem ipmsumewq ferer kwek yes aklsjdklasjdklajskldja kasjdkewmnasd asdnsad",
    },
    {
      id: 'k2lssaw',
      label: "Can I use React?",
      content: "Lorem ipmsumewq ferer kwek ye askljdaklsjdasdmn ",
    },
    {
      id: 'k21ls',
      label: "Can I use React on a php?",
      content: "Lorem ipmsumewq ferer kwek yes",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
