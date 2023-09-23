import { useAccount, useApi, useAlert } from '@gear-js/react-hooks';
import { web3FromSource } from '@polkadot/extension-dapp';
import { decodeAddress, ProgramMetadata } from '@gear-js/api';
import { Button } from '@chakra-ui/react';

function MintNFT() {
  const alert = useAlert();
  const { accounts, account } = useAccount();
  const { api } = useApi();

  // Add your programID
  const programIDNFT =
    '0x567162a71d0343e7ddc98bdbb0c9575f12e946588914cc8d7e4d13116ede1785';

  // Add your metadata.txt
  const meta =
    '0001000100000000000111000000011900000000000000011e000000212db00008186e66745f696f1c496e69744e465400000c0128636f6c6c656374696f6e040128436f6c6c656374696f6e000124726f79616c746965730c01444f7074696f6e3c526f79616c746965733e00012c636f6e73747261696e747334012c436f6e73747261696e747300000408186e66745f696f28436f6c6c656374696f6e00000801106e616d65080118537472696e6700012c6465736372697074696f6e080118537472696e6700000800000502000c04184f7074696f6e04045401100108104e6f6e6500000010536f6d650400100000010000101020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e24726f79616c7469657324526f79616c7469657300000801206163636f756e74731401185061796f757400011c70657263656e7430010c753136000014042042547265654d617008044b011804560124000400280000001810106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001c01205b75383b2033325d00001c000003200000002000200000050300240000050700280000022c002c000004081824003000000504003408186e66745f696f2c436f6e73747261696e747300000801386d61785f6d696e745f636f756e7438012c4f7074696f6e3c7533323e000148617574686f72697a65645f6d696e746572734001305665633c4163746f7249643e00003804184f7074696f6e040454013c0108104e6f6e6500000010536f6d6504003c00000100003c00000505004000000218004408186e66745f696f244e4654416374696f6e00012c104d696e740801387472616e73616374696f6e5f696448010c753634000138746f6b656e5f6d657461646174614c0134546f6b656e4d65746164617461000000104275726e0801387472616e73616374696f6e5f696448010c753634000120746f6b656e5f696450011c546f6b656e4964000100205472616e736665720c01387472616e73616374696f6e5f696448010c753634000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000200385472616e736665725061796f75741001387472616e73616374696f6e5f696448010c753634000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000118616d6f756e7424011075313238000300244e46545061796f75740801146f776e657218011c4163746f724964000118616d6f756e74240110753132380004001c417070726f76650c01387472616e73616374696f6e5f696448010c753634000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e49640005004044656c656761746564417070726f76650c01387472616e73616374696f6e5f696448010c75363400011c6d65737361676558015c44656c656761746564417070726f76654d6573736167650001247369676e61747572655c01205b75383b2036345d000600144f776e6572040120746f6b656e5f696450011c546f6b656e4964000700284973417070726f766564080108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400080014436c6561720401407472616e73616374696f6e5f6861736860011048323536000900244164644d696e7465720801387472616e73616374696f6e5f696448010c7536340001246d696e7465725f696418011c4163746f724964000a00004800000506004c1020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e14746f6b656e34546f6b656e4d6574616461746100001001106e616d65080118537472696e6700012c6465736372697074696f6e080118537472696e670001146d65646961080118537472696e670001247265666572656e6365080118537472696e67000050083c7072696d69746976655f74797065731055323536000004005401205b7536343b20345d000054000003040000004800581020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e2464656c6567617465645c44656c656761746564417070726f76654d6573736167650000140138746f6b656e5f6f776e65725f696418011c4163746f724964000144617070726f7665645f6163746f725f696418011c4163746f7249640001386e66745f70726f6772616d5f696418011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400015065787069726174696f6e5f74696d657374616d7048010c75363400005c00000340000000200060083c7072696d69746976655f74797065731048323536000004001c01205b75383b2033325d00006408186e66745f696f204e46544576656e7400011c205472616e73666572040068012c4e46545472616e73666572000000385472616e736665725061796f757404006c01444e46545472616e736665725061796f7574000100244e46545061796f757404001401185061796f757400020020417070726f76616c040070012c4e4654417070726f76616c000300144f776e65720801146f776e657218011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000400284973417070726f7665640c0108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e4964000120617070726f766564740110626f6f6c0005002c4d696e74657241646465640401246d696e7465725f696418011c4163746f72496400060000681020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e08696f2c4e46545472616e7366657200000c011066726f6d18011c4163746f724964000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400006c1020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e08696f444e46545472616e736665725061796f7574000010011066726f6d18011c4163746f724964000108746f18011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400011c7061796f7574731401185061796f75740000701020676561725f6c6962486e6f6e5f66756e6769626c655f746f6b656e08696f2c4e4654417070726f76616c00000c01146f776e657218011c4163746f724964000140617070726f7665645f6163636f756e7418011c4163746f724964000120746f6b656e5f696450011c546f6b656e496400007400000500007808186e66745f696f14496f4e46540000100114746f6b656e7c0128496f4e46545374617465000120746f6b656e5f696450011c546f6b656e49640001146f776e657218011c4163746f7249640001307472616e73616374696f6e73a801545665633c28483235362c204e46544576656e74293e00007c08186e66745f696f28496f4e4654537461746500002001106e616d65080118537472696e6700011873796d626f6c080118537472696e67000120626173655f757269080118537472696e6700012c6f776e65725f62795f696480015c5665633c28546f6b656e49642c204163746f724964293e00013c746f6b656e5f617070726f76616c738801705665633c28546f6b656e49642c205665633c4163746f7249643e293e000150746f6b656e5f6d657461646174615f62795f69649001945665633c28546f6b656e49642c204f7074696f6e3c546f6b656e4d657461646174613e293e000140746f6b656e735f666f725f6f776e65729c01705665633c284163746f7249642c205665633c546f6b656e49643e293e000124726f79616c746965730c01444f7074696f6e3c526f79616c746965733e00008000000284008400000408501800880000028c008c0000040850400090000002940094000004085098009804184f7074696f6e040454014c0108104e6f6e6500000010536f6d6504004c00000100009c000002a000a00000040818a400a40000025000a8000002ac00ac00000408606400';

  const metadata = ProgramMetadata.from(meta);

  const message: any = {
    destination: programIDNFT, // programId
    payload: {
      mint: [
        10,
        {
          name: 'Tare NFT Cartion',
          description: 'Tare',
          media: 'https://luconcha.github.io/images/TARE_NFT002.jpg',
          reference: 'Tare NFT Cartion',
        },
      ],
    }, // Add your data
    gasLimit: 2099819245,
    value: 0,
  };

  const signer = async () => {
    const localaccount = account?.address;
    const isVisibleAccount = accounts.some(
      (visibleAccount) => visibleAccount.address === localaccount
    );

    if (isVisibleAccount) {
      // Create a message extrinsic
      const transferExtrinsic = await api.message.send(message, metadata);

      const injector = await web3FromSource(accounts[0].meta.source);

      transferExtrinsic
        .signAndSend(
          accounts[0].address,
          { signer: injector.signer },
          ({ status }) => {
            if (status.isInBlock) {
              console.log(
                `Completed at block hash #${status.asInBlock.toString()}`
              );
              alert.success(`Block hash #${status.asInBlock.toString()}`);
            } else {
              console.log(`Current status: ${status.type}`);
              if (status.type === 'Finalized') {
                alert.success(status.type);
              }
            }
          }
        )
        .catch((error: any) => {
          console.log(':( transaction failed', error);
        });
    } else {
      alert.error('Account not available to sign');
    }

    const unsub = api.gearEvents.subscribeToGearEvent(
      'UserMessageSent',
      ({
        data: {
          message: { id, source, destination, payload, value },
        },
      }) => {
        console.log(`
        messageId: ${id.toHex()}
        source: ${source.toHex()}
        payload: ${payload.toHuman()}
        `);
      }
    );
  };

  return (
    <Button backgroundColor='green.400' onClick={signer}>
      {' '}
      Mint NFT
    </Button>
  );
}
export { MintNFT };
