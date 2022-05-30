interface MisiorProps {
  [key: string]: string;
}

export const misior: MisiorProps = {
  db_version: `19`,
  motd_hash: ``,
  motd_num: `0`,
  players_record: `0`,
};

interface MisiorWebProps {
  timezone: string;
  domain: string;
  ga_tracking_id: string;
}

export const misiorWeb: MisiorWebProps = {
  timezone: `America/Sao_Paulo`,
  domain: `https://misior.mitg.dev/`,
  ga_tracking_id: `G-MGCRHDCYFK`,
};

export default misior;
