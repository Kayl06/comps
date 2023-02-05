import {
  GoBell,
  GoCloudDownload,
  GoGear,
  GoPerson,
  GoTrashcan,
} from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button primary outline rounded hover onClick={handleClick}>
          <GoGear />
          Settings
        </Button>
      </div>
      <div>
        <Button success rounded hover>
          <GoPerson />
          Profile
        </Button>
      </div>
      <div>
        <Button secondary rounded hover>
          <GoBell />
          Notifications
        </Button>
      </div>
      <div>
        <Button warning rounded>
          <GoCloudDownload />
          Download
        </Button>
      </div>
      <div>
        <Button danger rounded outline hover>
          <GoTrashcan />
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
